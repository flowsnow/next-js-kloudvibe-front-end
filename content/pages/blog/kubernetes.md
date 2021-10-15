---
title: 'Will DevOps survive in a Kubernetes world? '
subtitle: Containers Containers Containers
date: '2021-06-21'
excerpt: >-
  All enterprises today are embracing digital transformation for continued
  growth and to gain a competitive edge. Cloud-native technologies such as
  Kubernetes
image_alt: kubernetes
thumb_image_alt: kubernetes
seo:
  title: Interesting facts about Kubernetes
  description: ' All enterprises today are embracing digital transformation for continued growth and to gain a competitive edge. Cloud-native technologies such as Kubernetes '
  extra:
    - name: 'og:type'
      value: article
      keyName: property
    - name: 'og:title'
      value: Interesting facts about Kubernetes
      keyName: property
    - name: 'og:description'
      value: |2
         All enterprises today are embracing digital transformation for continued growth and to gain a competitive edge. Cloud-native technologies such as Kubernetes 
      keyName: property
    - name: 'og:image'
      value: /images/Kubernetes-logo.png
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Interesting facts about Kubernetes
    - name: 'twitter:description'
      value: |2
         All enterprises today are embracing digital transformation for continued growth and to gain a competitive edge. Cloud-native technologies such as Kubernetes 
    - name: 'twitter:image'
      value: /images/Kubernetes-logo.png
      relativeUrl: true
layout: post
author: content/data/authors/jane-doe.yaml
thumb_image: /images/Why_DevOps_and_Kubernetes_Are_-a_Perfect_Match-a4addad6.png
image: /images/twjihe3bodu0wqowpwwr.png
---
Will DevOps survive in a Kubernetes world? The short answer is, no. But don’t sound the death knell for DevOps just yet.

Kubernetes (K8s) is the [core engine of a containerized platform as a service](https://kubernetes.io/) (PaaS). When enterprises use PaaS, they offload the operations (ops) functions to a PaaS provider as a way of automating repetitive tasks. Kubernetes introduces greater flexibility and automation. However, optimization of K8s requires declaration and configuration effort.

Where, then, does that leave DevOps as we know it?


![](https://preview--next-js-9111b.stackbit.dev/\_static/app-assets/images/Why_DevOps_and_Kubernetes_Are\_-a_Perfect_Match.png)


## Kubernetes Adoption

All enterprises today are embracing digital transformation for continued growth and to gain a competitive edge. Cloud-native technologies such as Kubernetes, provide the automation, visibility and control necessary to manage applications at scale and high innovation velocity.

Kubernetes provides [constructs and capabilities](https://containerjournal.com/topics/container-ecosystems/kubernetes-changing-the-game-for-enterprise-containerization/) in which operational functions such as managing, monitoring, updating and upgrading a cluster; scaling pods in or out; and managing resource handling are now done through code.

Kubernetes allows users to configure their desired state for a deployment. Kubernetes controllers continuously check the state of a deployment and attempt to get it from the current state to the desired state. Tasks such as rollouts and rollbacks, scale up and scale down, etc., are now automated. Resource limits and conditions can be specified. Further, taints and tolerations optimize deployment at runtime.

Technologies such as Istio integrate with Kubernetes to further streamline and automate complex operational tasks such as discovery, traffic management, monitoring and service rollout.

Traditionally, DevOps was the “glue” that bound application development and IT infrastructure. Using Kubernetes, an enterprise now can use declarative API actions to have complete control over the application’s development infrastructure. So, is Kubernetes the “new infrastructure glue,” and if yes, does that make DevOps redundant?

Not quite.

## Evolution of DevOps

DevOps is no longer just about continuous integration and continuous delivery (CI/CD). Kubernetes-based cloud-native application deployments offer tremendous opportunities for the role of DevOps to evolve and expand. The opportunity is to evolve from simply “the people who keep the lights on” to architects, enabling strategic business outcomes.

To a casual observer, it may appear that operational tasks are minimized by the Kubernetes-led automation in the deployment pipeline, and during the deployment and operations processes. A deeper look unveils why that’s not so. While applications can be flexibly deployed using a Kubernetes configuration, understanding replicas, scale, taints and tolerations are not top of mind for many developers.

“Good” configurations require a balance of key vectors such as faster deployment time, optimal resource usage, greater reliability and quick failure resolution, which are the catalysts for the DevOps evolution.

In addition, the role of DevOps will also expand to include complex cross-functional collaboration with teams such as ones tasked with security to help provide better security in Kubernetes environments.

## DevOps’ Transition to DevSecOps

Security cannot be a silo within a Kubernetes environment. In fact, more emphasis these days is being placed on DevOps and security. Security practices are becoming more of a part of the software development life cycle. DevSecOps breaks the traditional silo between the Security and DevOps teams. In a Kubernetes environment, DevSecOps will now certify configurations, ensure security and enable compliance ahead of operational deployment. In other words, “Certify the factory instead of every component built by the factory.”

For instance, this may include vulnerability assessment of images as soon as they are built, ensuring only attested images are deployed, automated checks of deployment manifests—i.e. infrastructure-as-code (IaC) templates against known bad configuration as soon as code is checked in—all well before a container image is deployed

Enterprises must address the following five use cases to enable comprehensive security for cloud-native applications running in Kubernetes environments:

1.  **Rich Discovery and Risk-Based Classification**: This is the ability to discover all services and help prioritize and classify to enable organizations to be more risk-aware. This is critical as there are a high number of resources, many of which are ephemeral.

2.  **Protect Against Configuration Drift and Open Source Software Vulnerabilities**: This is the ability to detect all vulnerabilities in components of the container ecosystem including the container images, registries and the K8s control pane itself. This is also about the ability to manage the security posture of K8s control plane and the running containers clusters.

3.  **Minimize Attack Surface and Prevent Escalations**: This is the ability to perform application or service-based segmentation in an environment based on resource usage. This creates a security zone at a container level, permissions for which are based on learned behavior.

4.  **Extend Security Operations Center (SOC) to Cloud-Native Applications**: This is the ability to drive the detection and remediation of cloud-native threats.

5.  **Access Governance and Compliance**: This is the ability to manage identity and access for all users and application components to create and manage a model of least privilege

Besides the above use cases, the system allows for constant monitoring and fast feedback. This enables the promise of DevSecOps to deliver secure code faster.

## In Summary

Kubernetes brings significant agility, automation and optimization to the DevOps environment. It will be a catalyst for DevOps to break existing silos and evolve as a strategic function enabling business outcomes.

![](/images/Why_DevOps_and_Kubernetes_Are\_-a_Perfect_Match.png)
