// import { DeletePerson, DeletePersonHooks, useDatabase } from '@teamkeel/sdk';
// import { sql } from "kysely";

// // To learn more about what you can do with hooks,
// // visit https://docs.keel.so/functions
// const hooks : DeletePersonHooks = {};

// export default DeletePerson({
//     async afterWrite(ctx, inputs, data) {
        

//         const db = await useDatabase();
//         const res = await sql`DELETE FROM keel_audit WHERE data->>'id' = '${data.id}'`.execute(db);
        
//         console.log("Dropped " + res.numAffectedRows + " audit logs for " + data.id);
//     }
// });
	