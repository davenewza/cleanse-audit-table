import { CleanseAuditLogs, useDatabase } from '@teamkeel/sdk';
import { sql } from "kysely";

export default CleanseAuditLogs(async (ctx, event) => {
    switch (event.eventName) {
        case "patient.deleted":
            const db = await useDatabase();
            const res = await sql`DELETE FROM keel_audit WHERE data->>'id' = ${event.target.id}`.execute(db);
            break;
        default:
            break;
    }
});