import MyBookings
from "./pages/user/MyBookings";

import Notifications
from "./pages/user/Notifications";
import {
  Routes,
  Route
} from "react-router-dom";

import Login
from "./pages/Login";

import Register
from "./pages/Register";

import Dashboard
from "./pages/admin/Dashboard";

import BrowseAssets
from "./pages/user/BrowseAssets";

import ProtectedRoute
from "./components/ProtectedRoute";

import Assets
from "./pages/admin/Assets";

import Bookings
from "./pages/admin/Bookings";

import Maintenance
from "./pages/admin/Maintenance";

import AuditLogs
from "./pages/admin/AuditLogs";

import QRScanner
from "./pages/admin/QRScanner";

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/user/bookings"
        element={
          <ProtectedRoute>
            <MyBookings />
          </ProtectedRoute>
        }
      />

      <Route
        path="/user/notifications"
        element={
          <ProtectedRoute>
            <Notifications />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/user/assets"
        element={
          <ProtectedRoute>
            <BrowseAssets />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/assets"
        element={
          <ProtectedRoute>
            <Assets />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/bookings"
        element={
          <ProtectedRoute>
            <Bookings />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/maintenance"
        element={
          <ProtectedRoute>
            <Maintenance />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/audit-logs"
        element={
          <ProtectedRoute>
            <AuditLogs />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/qr-scanner"
        element={
          <ProtectedRoute>
            <QRScanner />
          </ProtectedRoute>
        }
      />

    </Routes>

  );
}

export default App;