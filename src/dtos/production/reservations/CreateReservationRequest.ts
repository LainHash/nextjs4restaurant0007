export interface CreateReservationRequest {
  ReservationTime: string;
  NumberOfGuests: number;
  Note?: string;

  GuestName?: string;
  GuestEmail?: string;
  GuestPhone?: string;

  TableType?: string;
}
