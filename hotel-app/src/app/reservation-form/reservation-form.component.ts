import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReservationService} from "../reservation/reservation.service";
import {ReservationModule} from "../reservation/reservation.module";
import {Reservation} from "../models/reservation";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit{

  constructor(private formBuilder: FormBuilder,
              private reservationService: ReservationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });

    const id = this.isEdit()

    if(id) {
      this.reservationService.getReservationById(id).subscribe(reservation => {
        if(reservation) {
          this.reservationForm.patchValue(reservation)
        }
      });
    }
  }

  public reservationForm: FormGroup = new FormGroup({});

  onSubmit() {
    if(this.reservationForm.invalid) {
      return
    }
    const reservation: Reservation = this.reservationForm.value;

    const reservationId = this.isEdit();
    if(reservationId) {
      this.reservationService.updateReservation(reservationId, reservation).subscribe(() =>{
        console.log("Update request Processed.");
      });
    } else {
      this.reservationService.addReservation(reservation).subscribe(() => {
        console.log("Post request Processed.");
      });
    }
    this.router.navigate(['/list'])
  }

  private isEdit(): string | null {
    return this.activatedRoute.snapshot.paramMap.get('id');
  }
}
