package com.fhmn.controller;

import com.fhmn.entity.Task;
import com.fhmn.service.TaskService;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

import java.util.Date;
import java.util.List;

@Path("/tasks")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TaskController {
    private final TaskService taskService =  new TaskService();

    //GET ALL TASKS
    @GET
    public List<Task> getTasks() {
        return taskService.getAllTasks();
    }

    //UPDATE TASK
    @PUT
    @Path("/{id}")
    public Task updateTask(@PathParam("id")int id, Task task) {
        taskService.updateTask(id,task.getTitle());
        return task;
    }

    //ADD NEW TASKS
    @POST
    public void addTask(Task task) {
        task.setCreatedAt(new Date());
        taskService.addNewTask(task);
    }

    //DELETE TASK
    @DELETE
    @Path("/{id}")
    public void deleteTask(@PathParam("id") int id) {
        taskService.deleteTask(id);
    }

}
