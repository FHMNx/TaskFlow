package com.fhmn.service;

import com.fhmn.entity.Task;
import com.fhmn.util.HibernateUtil;
import org.hibernate.Session;

import java.util.List;

public class TaskService {

    //GET ALL TASKS
    public List<Task> getAllTasks() {
        Session hibernateSession = HibernateUtil.getSessionFactory().openSession();
        List<Task> taskList = hibernateSession.createQuery("FROM Task", Task.class).list();
        hibernateSession.close();
        return taskList;
    }

    //ADD NEW TASKS
    public void addNewTask(Task task) {
        Session hibernateSession = HibernateUtil.getSessionFactory().openSession();
        hibernateSession.beginTransaction();
        hibernateSession.persist(task);
        hibernateSession.getTransaction().commit();
        hibernateSession.close();
    }

    //UPDATE TASK
    public void updateTask(int id, String title) {
        Session hibernateSession = HibernateUtil.getSessionFactory().openSession();
        hibernateSession.beginTransaction();

        Task task =hibernateSession.find(Task.class, id);
        if(task!=null){
            task.setTitle(title);
            hibernateSession.merge(task);
        }
        hibernateSession.getTransaction().commit();
        hibernateSession.close();
    }


    //DELETE TASK
    public void deleteTask(int id) {
        Session hibernateSession = HibernateUtil.getSessionFactory().openSession();
        hibernateSession.beginTransaction();
        Task task = hibernateSession.find(Task.class, id);
        if (task != null) {
            hibernateSession.remove(task);
        }

        hibernateSession.getTransaction().commit();
        hibernateSession.close();
    }
}
