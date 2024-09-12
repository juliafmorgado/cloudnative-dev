# Challenge 4: Deploying Applications to Kubernetes

## Overview
In Challenge 4, we take the next step by deploying our application services to a Kubernetes cluster. This challenge builds upon the previous work and involves transitioning from running services locally to managing them within a Kubernetes environment.

Review Salaboy's Challenge 4 instructions [here](https://github.com/salaboy/cloud-native-dev/blob/main/4/README.md).
For a step-by-step guide and additional insights, check out my tutorial blog [here](https://www.juliafmorgado.com/posts/challenge-4-getting-your-app-to-kubernetes-with-kind/).

## Branches

### main
We will use [KinD (Kubernetes in Docker)](https://kind.sigs.k8s.io/) to set up a local Kubernetes cluster and deploy both the app and dashboard services, as well as the PostgreSQL database. This [guide](https://www.juliafmorgado.com/posts/challenge-4-getting-your-app-to-kubernetes-with-kind/) will walk you through setting up your Kubernetes environment, creating deployment and service configurations, and verifying that everything is running smoothly.

### eks
We will use Amazon EKS to set up a remote Kubernetes cluster and deploy both the app and dashboard services, as well as the PostgreSQL database. This [guide](https://www.juliafmorgado.com/posts/challenge-4-getting-your-app-to-kubernetes-with-amazon-eks/) will walk you through setting up your Kubernetes environment, creating deployment and service configurations, and verifying that everything is running smoothly.

## Prerequisites
- [Docker](https://docs.docker.com/get-docker/) installed on your system

## Clone the Repository
1. Clone this repository: `git clone https://github.com/juliafmorgado/cloud-native-dev.git`
2. Navigate to the challenge-4 directory: `cd challenge-4`

## Set Up Your Kubernetes Cluster
Set the local Kubernetes cluster on KinD or remote on Amazon EKS.

## Apply the Kubernetes configuration files:
`kubectl apply -f k8s/`

This will deploy your application and dashboard services to the KinD cluster, using the images and configurations specified in the `k8s` directory.

## Access the Applications
### For the KinD Deployment
1. To make the services accessible locally, use port-forwarding:
    ```
    kubectl port-forward svc/app 3000:80
    kubectl port-forward svc/dashboard 3001:80
    ```

2. Access the applications in your browser:
    - App: [http://localhost:3000](http://localhost:3000)
    - Dashboard: [http://localhost:3001](http://localhost:3001)

### For the EKS Deployment
You will access the services with the EXTERNAL-IP from the load balancers.

## Clean Up
1. To delete the deployed resources: `kubectl delete -f k8s/`

2. To delete the KinD cluster: `kind delete cluster --name challenge-4`




