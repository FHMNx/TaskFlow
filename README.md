# TaskFlow Mobile

A full-stack cross-platform Task Management application built using:

- React Native (Expo + TypeScript)
- Java SE 17
- Hibernate ORM
- MySQL
- Embedded Apache Tomcat
- Jersey (JAX-RS)

Developed for **Handheld Device Programming I – Cross-Platform Mobile Application Development Assessment**  
Java Institute for Advanced Technology.

---

##  Application Overview

TaskFlow Mobile allows users to:

- Create tasks
- View all tasks
- Update existing tasks
- Delete tasks
- Toggle between Light and Dark themes (AsyncStorage)

The application demonstrates full-stack integration between a React Native mobile app and a Java backend without using Spring Boot.

---

##  System Architecture
React Native (Expo)
│
▼
Axios HTTP Requests
│
▼
Embedded Tomcat + Jersey (REST API)
│
▼
Hibernate ORM
│
▼
MySQL Database


---

## Features

- Full CRUD operations
- REST API integration
- Persistent MySQL database
- AsyncStorage theme persistence
- Clean UI using React Native built-in components
- Tab navigation (Expo Router)
- TypeScript-based frontend

---

##  Tech Stack

### Frontend
- React Native (Expo)
- Expo Router
- TypeScript
- Axios
- AsyncStorage

### Backend
- Java SE 17
- Embedded Apache Tomcat
- Jersey (JAX-RS)
- Hibernate ORM
- MySQL
- Maven

---

##  Project Structure
TaskFlow/
│
├── app/ → React Native frontend
│
└── backend/
└── TaskFlow-B/ → Java backend project
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Author - Fahman
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
![Home-Dark](https://github.com/user-attachments/assets/c31ff95c-27ef-448a-8ff7-f0b78317a6d7)
![Home-Light](https://github.com/user-attachments/assets/bbc72cf1-8c17-42c9-a854-b84e46120ea5)
![List-Light](https://github.com/user-attachments/assets/867825bd-56b5-4768-83d3-cffe1ed5f520)
![Form-Light](https://github.com/user-attachments/assets/deed340b-1eea-44f6-a0b1-3e118c4625c9)
![settings-Dark](https://github.com/user-attachments/assets/710b6d36-3a80-4c6a-8db5-d1f478ca8192)


