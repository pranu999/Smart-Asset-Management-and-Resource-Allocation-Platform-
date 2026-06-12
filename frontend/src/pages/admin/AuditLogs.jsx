import {
  useEffect,
  useState
} from "react";

import AdminLayout
from "../../components/AdminLayout";

import {
  getAuditLogs
} from "../../api/auditApi";

function AuditLogs() {

  const [logs,
  setLogs] =
  useState([]);

  useEffect(() => {

    loadLogs();

  }, []);

  const loadLogs =
  async()=>{

    const res =
    await getAuditLogs();

    setLogs(
      res.data
    );
  };

  return (

    <AdminLayout>

      <h2>
        Audit Logs
      </h2>

      {
        logs.map(
          log => (

            <div
              key={log.id}
            >

              <h4>
                {log.action}
              </h4>

              <p>
                {log.details}
              </p>

              <p>
                {log.name}
              </p>

              <hr/>

            </div>

          )
        )
      }

    </AdminLayout>

  );
}

export default AuditLogs; 