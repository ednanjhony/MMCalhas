import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      name: 'Ednan',
      address: 'Estrada dos loucos',
      tel: '4547-2213',
      desc: 'Orçamento feito',
      date: '25-05-2020',
      done: true,
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.name).toBe('Ednan');
    expect(appointment.address).toBe('Estrada dos loucos');
    expect(appointment.tel).toBe('4547-2213');
    expect(appointment.desc).toBe('Orçamento feito');
    expect(appointment.date).toBe('25-05-2020');
    expect(appointment.done).toBe(true);
  });
});
