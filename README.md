# #  CI/CD Pipeline for Node.js Notes Application using Jenkins & Kubernetes

## Project Overview

This project demonstrates how to containerize and deploy a **Node.js Notes Application** on a **Kubernetes cluster**. The application is packaged with Docker,
deployed using Kubernetes Deployments and Services, and can be accessed through a NodePort Service. This project showcases practical DevOps skills including 
Docker, Kubernetes, Linux, Git, and GitHub.

![image ALT](https://github.com/Pradeep1155/simple_notesadd_ci_cd_pipeline_project/blob/0a46113caf9d7221de813781490054d98cfcfa6b/Screenshot%202026-08-01%20111021.png)

---

##  Features

* Create and manage notes
* Containerized using Docker
* Deployed on Kubernetes
* High availability using multiple replicas
* Service exposure using NodePort
* Easy to scale using Kubernetes

---

##  Tech Stack

* Node.js
* Docker
* Kubernetes
* Linux (RHEL)
* Git
* GitHub

---

##  Project Structure

```text
notes-app/
│── app.js
│── package.json
│── Dockerfile
│── deployment.yml
│── service.yml
│── README.md
```

---

##  Docker Image

Build the Docker image:

```bash
docker build -t notes-app:v1 .
```

Run locally:

```bash
docker run -d \
  --name notes-app \
  -p 8081:8080 \
  pradeep1155/notes-app:v1
```

---

##  Kubernetes Deployment

Deploy the application:

```bash
kubectl apply -f deployment.yml
kubectl apply -f service.yml
```

Check deployment:

```bash
kubectl get deployments
kubectl get pods
kubectl get services
```

---

## Verify the Application

Check running pods:

```bash
kubectl get pods
![image ALT](https://github.com/Pradeep1155/simple_notesadd_ci_cd_pipeline_project/blob/ce240b69f9506d1249751d6502eebd6d6dede3f6/Screenshot%202026-07-31%20212039.png)
```

Describe deployment:

```bash
kubectl describe deployment notes-app
```

View logs:

```bash
kubectl logs <pod-name>
```

---

##  Scaling the Application

Increase replicas:

```bash
kubectl scale deployment notes-app --replicas=3
```

Verify:

```bash
kubectl get pods
```

---

##  Cleanup

Delete resources:

```bash
kubectl delete -f deployment.yml
kubectl delete -f service.yml
```

---

## 📸 Project Screenshots

Add screenshots such as:

* Application Home Page
* Docker Image Build
* Running Docker Container
* Kubernetes Pods
* Kubernetes Deployment
* Kubernetes Service
* Browser Output

---

##  Learning Outcomes

Through this project, I learned:

* Docker containerization
* Creating Docker images
* Kubernetes Deployments
* Kubernetes Services
* Pod management
* Scaling applications
* Linux command-line operations
* Git & GitHub project management

---

## ⭐ If you found this project helpful, don't forget to give it a Star!
