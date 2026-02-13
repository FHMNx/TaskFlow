package com.fhmn.DTO;

import java.time.LocalDateTime;

public class TaskDTO {
    private Integer id;
    private String title;
    private LocalDateTime createdAt;

    public TaskDTO() {
    }

    public TaskDTO(Integer id, String title, LocalDateTime createdAt) {
        this.id = id;
        this.title = title;
        this.createdAt = createdAt;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
