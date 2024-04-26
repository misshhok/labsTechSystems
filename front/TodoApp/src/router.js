import * as React from "react";
import {
  createBrowserRouter, createRoutesFromElements, Route,
  RouterProvider, Routes,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CreateTask from "./pages/CreateTask";
import Today from "./pages/Today";
import Tasks from "./pages/Tasks";
import EditTask from "./components/EditTask";
import Complete from "./pages/Complete";
import Important from "./pages/Important";
import GroupPage from "./pages/GroupPage";
import MainPage from "./pages/MainPage";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<MainPage/>}/>
      <Route path={'/tasks'} element={<Tasks/>} />
      <Route path={'/create'} element={<CreateTask/>} />
      <Route path={'/today'} element={<Today/>} />
      <Route path={'/complete'} element={<Complete/>} />
      <Route path={`tasks/:id/edit`} element={<EditTask/>} />
      <Route path={`group/:id`} element={<GroupPage/>} />
      <Route path={'/important'} element={<Important/>}/>
    </Route>
  )
);

export default router
