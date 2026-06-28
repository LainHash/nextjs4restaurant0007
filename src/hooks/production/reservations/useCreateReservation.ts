import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { reservationService } from "../../../services/production/reservations/reservationService";
import { useAuth } from "../../../contexts/AuthContext";

export const createReservationSchema = z.object({
  ReservationDate: z.string().min(1, "Date is required"),
  ReservationTime: z.string().min(1, "Time is required"),
  NumberOfGuests: z.number().min(1, "At least 1 guest").max(20, "Maximum 20 guests"),
  Note: z.string().optional(),
  TableType: z.string().optional(),
  GuestName: z.string().optional(),
  GuestEmail: z.string().email("Invalid email").optional().or(z.literal("")),
  GuestPhone: z.string().optional(),
});

export type CreateReservationFormValues = z.infer<typeof createReservationSchema>;

export const useCreateReservation = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);

  const now = new Date();
  const defaultDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

  const form = useForm<CreateReservationFormValues>({
    resolver: zodResolver(createReservationSchema),
    defaultValues: {
      ReservationDate: defaultDate,
      ReservationTime: "19:00",
      NumberOfGuests: 2,
      Note: "",
      TableType: "",
      GuestName: "",
      GuestEmail: "",
      GuestPhone: "",
    },
  });

  const onSubmit = async (data: CreateReservationFormValues) => {
    setIsProcessing(true);
    try {
      // Combine Date and Time into a single DateTime string and convert to UTC ISO 8601 for PostgreSQL
      const localDateTimeString = `${data.ReservationDate}T${data.ReservationTime}:00`;
      const combinedDateTime = new Date(localDateTimeString).toISOString();

      const payload = {
        ReservationTime: combinedDateTime,
        NumberOfGuests: data.NumberOfGuests,
        Note: data.Note,
        TableType: data.TableType,
        GuestName: data.GuestName,
        GuestEmail: data.GuestEmail,
        GuestPhone: data.GuestPhone,
      };

      await reservationService.create(payload);

      router.push("/book/success");
    } catch (error: any) {
      console.error("Booking error:", error);
      const errorMessage = error.response?.data?.message || "Failed to make a reservation. Please try again.";
      alert(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    form,
    isProcessing,
    onSubmit: form.handleSubmit(onSubmit),
    isAuthenticated,
  };
};
