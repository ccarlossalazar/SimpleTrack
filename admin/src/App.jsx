import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/SingleUser/Single"
import SingleEquipment from "./pages/SingleEquipment/SingleEquipment.jsx"
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { userInputs} from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import { userColumns, equipmentColumns, workOrderColumns, logColumns, requestColumns} from "./datatablesource";
import NewEquipment from "./pages/newEquipment/newEquipment";
import NewWorkOrder from "./pages/newWorkOrder/newWorkOrder.jsx";
import SingleWorkOrder from "./pages/SingleWorkOrder/SingleWorkOrder.jsx";
import SingleRequest from "./pages/SingleRequest/SingleRequest.jsx";
import SingleLog from "./pages/SingleLog/SingleLog.jsx";
import NewRequestWorkOrder from "./pages/newRequestWorkOrder/newRequestWorkOrder.jsx";
import NewLog from "./pages/newLog/newLog.jsx";
import Notifications from "./pages/notifications/notifications.jsx";
import Stats from "./pages/stats/stats.jsx";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const {user} = useContext(AuthContext)

    if(!user) {
      return <Navigate to="/login" />
    }

    return children
  }


  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route path="login" element={<Login />} />
            <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="users">
              <Route index element={<ProtectedRoute><List columns={userColumns} /></ProtectedRoute>} />
              <Route path=":id" element={<ProtectedRoute><Single /></ProtectedRoute>} />
              <Route
                path="new"
                element={<ProtectedRoute><New inputs={userInputs} title="Add New User" /></ProtectedRoute>}
              />
            </Route>
            <Route path="equipment">
              <Route index element={<List columns={equipmentColumns}/>} />
              <Route path=":id" element={<ProtectedRoute><SingleEquipment/></ProtectedRoute>} />
              <Route
                path="new"
                element={<ProtectedRoute><NewEquipment/></ProtectedRoute>}
              />
            </Route>
            <Route path="workorders">
              <Route index element={<List columns={workOrderColumns}/>}/>
              <Route path=":Id" element={<ProtectedRoute><SingleWorkOrder/></ProtectedRoute>} />
              <Route
                path="new"
                element={<ProtectedRoute><NewWorkOrder /></ProtectedRoute>}
              />
            </Route>
            <Route path="requests">
              <Route index element={<List columns={requestColumns}/>}/>
              <Route path=":Id" element={<ProtectedRoute><SingleRequest/></ProtectedRoute>} />
              <Route
                path="new/:id"
                element={<ProtectedRoute><NewRequestWorkOrder/></ProtectedRoute>}
              />
            </Route>
            <Route path="maintenance">
              <Route index element={<List columns={logColumns}/>} />
              <Route path=":id" element={<ProtectedRoute><SingleLog /></ProtectedRoute>} />
              <Route
                path="new/:id"
                element={<ProtectedRoute><NewLog/></ProtectedRoute>}
              />
            </Route>
            <Route path="notifications">
              <Route index element={<Notifications/>} />
            </Route>
            <Route path="stats">
              <Route index element={<Stats/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
