---
title: What is Docker?
subtitle: The spark for the container revolution
date: '2021-05-26'
excerpt: >-
  Docker helps developers build lightweight and portable software containers
  that simplify application development, testing, and deployment.
image_alt: >-
  Docker helps developers build lightweight and portable software containers
  that simplify application development, testing, and deployment.
thumb_image_alt: lorem-ipsum
seo:
  title: Interesting facts about Docker
  description: >-
    Docker helps developers build lightweight and portable software containers
    that simplify application development, testing, and deployment.
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: Interesting facts about Docker
      keyName: property
    - name: 'og:description'
      value: >-
        Docker helps developers build lightweight and portable software
        containers that simplify application development, testing, and
        deployment.
      keyName: property
    - name: 'og:image'
      value: /images/Moby-run.png
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Interesting facts about Docker
    - name: 'twitter:description'
      value: >-
        Docker helps developers build lightweight and portable software
        containers that simplify application development, testing, and
        deployment.
    - name: 'twitter:image'
      value: /images/Moby-run.png
      relativeUrl: true
layout: post
author: content/data/authors/john-doe.yaml
thumb_image: /images/Docker-logo.jpg
image: /images/Docker-logo-4a00da55.jpg
---



Docker helps developers build lightweight and portable software containers that simplify application development, testing, and deployment.

What is Docker? The spark for the container revolution

Docker is a software platform for building applications based on containers—small and lightweight execution environments that make shared use of the operating system kernel but otherwise run in isolation from one another. While containers have been used in Linux and Unix systems for some time, Docker, an open source project launched in 2013, helped popularize the technology by making it easier than ever for developers to package their software to “build once and run anywhere.”

A brief history of Docker

Founded as DotCloud in 2008 by Solomon Hykes in Paris, what we now know as Docker started out as a platform as a service (PaaS) before pivoting in 2013 to focus on democratizing the underlying software containers its platform was running on.

Hykes first demoed Docker at PyCon in March 2013, where he explained that Docker was created because developers kept asking for the underlying technology powering the DotCloud platform. “We did always think it would be cool to be able to say, ‘Yes, here is our low-level piece. Now you can do Linux containers with us and go do whatever you want, go build your platform.’ So that’s what we are doing.”

And so Docker was born, with the open source project quickly picking up traction with developers and attracting the attention of high-profile technology providers like Microsoft, IBM, and Red Hat, as well as venture capitalists willing to pump millions of dollars into the innovative startup. The container revolution had begun.

What are containers?

As Hykes described it in his PyCon talk, containers are “self-contained units of software you can deliver from a server over there to a server over there, from your laptop to EC2 to a bare-metal giant server, and it will run in the same way because it is isolated at the process level and has its own file system.”

By simplifying this process, Docker quickly became close to a de facto industry standard for containers. Docker let developers deploy, replicate, move, and back up a workload in one streamlined way, using a set of reusable images to make workloads more portable and flexible than previous methods allowed.

In the virtual machine (VM) world, this could be done by keeping applications separate while running on the same hardware, but in that world each VM requires its own operating system, meaning they are typically large, slow to start up, difficult to move around, and cumbersome to maintain and upgrade. Where containers marked a defined shift from the VM era was by isolating execution environments while sharing the underlying OS kernel, providing a lightweight and speedy option for developers.

Docker

How the virtualization and container infrastructure stacks stack up. 

Docker: the component parts

Docker took off with software developers because it found a novel way to package the tools required to build and launch a container in a more streamlined and simplified way than was previously possible. Broken down into its component parts, Docker comprises Dockerfile, container images, the Docker run utility, Docker Hub, Docker Engine, Docker Compose, and Docker Desktop.

Dockerfile. Each Docker container starts with a Dockerfile. This text file provides a set of instructions to build a Docker image, including the operating system, languages, environmental variables, file locations, network ports, and any other components it needs to run.

Docker image. Similar to a snapshot in the VM world, a Docker image is a portable, read-only, executable file containing the instructions for creating a container and the specifications for which software components the container will run and how.

Docker run utility. Docker’s run utility is the command that launches a container. Each container is an instance of an image, and multiple instances of the same image can be run simultaneously.

Docker Hub. Docker Hub is a repository where container images can be stored, shared, and managed. Think of it as Docker’s own version of GitHub, but specifically for containers.

Docker Engine. Docker Engine is the core of Docker. It is the underlying client-server technology that creates and runs the containers. The Docker Engine includes a long-running daemon process called dockerd for managing containers, APIs that allow programs to communicate with the Docker daemon, and a command-line interface.

Docker Compose. Docker Compose is a command-line tool that uses YAML files to define and run multicontainer Docker applications. It allows you to create, start, stop, and rebuild all the services from your configuration and view the status and log output of all running services.

Docker Desktop. All of these component parts are wrapped in Docker’s Desktop application, providing a user-friendly way to build and share containerized applications and microservices.

Docker advantages

Docker containers provide a way to build applications that are easier to assemble, maintain, and move around than previous methods allowed. That provides several advantages to software developers.

Docker containers are minimalistic and enable portability. Docker lets applications and their environments be kept clean and minimal by isolating them, which allows for more granular control and greater portability.

Docker containers enable composability. Containers make it easier for developers to compose the building blocks of an application into a modular unit with easily interchangeable parts, which can speed up development cycles, feature releases, and bug fixes.

Docker containers ease orchestration and scaling. Because containers are lightweight, developers can launch lots of them for better scaling of services. These clusters of containers do then need to be orchestrated, which is where Kubernetes typically comes in.

Docker drawbacks

Containers solve a great many problems, but they don’t solve all developer ills.

Docker containers are not virtual machines. Unlike virtual machines, containers use controlled portions of the host operating system’s resources, which means elements aren’t as strictly isolated as they would be on a VM.

Docker containers don’t provide bare-metal speed. Containers are significantly more lightweight and closer to the metal than virtual machines, but they do incur some performance overhead. If your workload requires bare-metal speed, a container will get you close but not all the way there.

Docker containers are stateless and immutable. Containers boot and run from an image that describes their contents. That image is immutable by default—once created, it doesn’t change. But a container instance is transient. When it is removed from system memory it’s gone forever. If you want your containers to persist state across sessions, like a virtual machine, you need to design for that persistence.

What is Docker today?

Container usage continues to grow as cloud-native development techniques become the mainstream model for building and running software, but Docker is now only a part of that puzzle.

Docker became mainstream by making it easy to move the code for an application and all of its dependencies from the developer’s laptop to a server. But the rise of containers led to a shift in the way applications are built—from monolithic stacks to networks of microservices. Soon many users needed a way to orchestrate and manage groups of containers at scale.

Born out of Google, the Kubernetes open source project quickly emerged as the best way to do this, superseding Docker’s own attempts to solve this problem with its Swarm orchestrator (RIP). Amidst increasing funding trouble, Docker eventually sold its enterprise business to Mirantis in 2019, which has since absorbed Docker Enterprise into the Mirantis Kubernetes Engine.

The remains of Docker—which includes the original open source Docker Engine container runtime, Docker Hub image repository, and Docker Desktop application—live on under the leadership of company veteran Scott Johnston, who is looking to reorient the business around its core customer base of software developers.
