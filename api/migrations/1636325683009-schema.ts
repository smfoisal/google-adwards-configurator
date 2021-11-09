import {MigrationInterface, QueryRunner} from "typeorm";

export class schema1636325683009 implements MigrationInterface {
    name = 'schema1636325683009'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`keyword\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_c37917986ab4672d78f5e037ec\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`site\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_9669a09fcc0eb6d2794a658f64\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_9669a09fcc0eb6d2794a658f64\` ON \`site\``);
        await queryRunner.query(`DROP TABLE \`site\``);
        await queryRunner.query(`DROP INDEX \`IDX_c37917986ab4672d78f5e037ec\` ON \`keyword\``);
        await queryRunner.query(`DROP TABLE \`keyword\``);
    }

}
