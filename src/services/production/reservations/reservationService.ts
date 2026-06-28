import apiClient from "../../../utils/apiClient";
import { CreateReservationRequest } from "../../../dtos/production/reservations/CreateReservationRequest";

export const reservationService = {
  create: async (data: CreateReservationRequest) => {
    return await apiClient.post("/api/reservations", data);
  },
};
