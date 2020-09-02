import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AlterAppointmentFieldAppointmentId1599012950979
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'appointment_id',
        type: 'varchar',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'appointments',
      new TableForeignKey({
        name: 'AppointmentId',
        columnNames: ['appointment_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'appointments',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('appointments', 'AppointmentId');

    await queryRunner.dropColumn('appointments', 'appointment_id');

    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'appointments',
        type: 'varchar',
      }),
    );
  }
}
