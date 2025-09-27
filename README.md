# BWT PE Case Study

This repository contains the solution for the Platform Engineer Case Study, where the goal is to containerize a Node.js application, run it on Kubernetes, and expose it securely over the internet.

The application is live and available at:
👉 https://bwtsandboxapi.adroitcube.com

API Endpoints:

https://bwtsandboxapi.adroitcube.com/users

https://bwtsandboxapi.adroitcube.com/crash


## Task Overview

* Containerize the Node.js dummy hostname app
* Deploy it to a Kubernetes cluster running on AWS EKS.
* Expose the application to the internet with proper DNS & HTTPS.
* HTTPS enabled using cert-manager with Let's Encrypt.
* CI/CD pipeline implemented with GitHub Actions.
* Helm chart used for deployment.

## Infrastructure and Deployment Stack & Components

* Cloud Provider: AWS
* Infrastructure Provisioning: Terraform (for EKS cluster, VPC, IAM, etc.)
* Containerization: Docker (Dockerfile included in source app repo)
* Kubernetes Add-ons:
  * NGINX Ingress Controller (ingress + internet exposure)
  * Cert-Manager (TLS/SSL certificates)
* CI/CD: GitHub Actions (build → push to ECR → deploy with Helm)
* Deployment Tooling: Helm


### Note
Everything required to reproduce this setup is included in this repository:
* [Dockerfile](https://github.com/akbardotalam/bwt-PE-Task/blob/main/Dockerfile)
* [Helm chart bwt-sandbox](https://github.com/akbardotalam/bwt-PE-Task/tree/main/bwt-sandbox)
* [CI/CD](https://github.com/akbardotalam/bwt-PE-Task/blob/main/.github/workflows/build-n-deploy.yml)
* [SSL Cert Manager Configs](https://github.com/akbardotalam/bwt-PE-Task/blob/main/deployment-manifest/cert-configs.yaml)