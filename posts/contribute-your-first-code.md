---
title: "Contribute your first code to OSS"
subtitle: Learn how to get started with open source and contribute
date: 21 Aug 2024
---

## What is Open Source?

Open source means that anyone can see, use, and change the code behind a software program.

* **Access to Code**: The source code of the project is freely available for you to look at. You can see how it’s written and understand how it works.
    
* **Experimenting**: You can make a copy of the project (called a "fork") to experiment with. This way, you can try out new ideas without affecting the original project.
    

**Contributing**: You can contribute to the project by fixing bugs, adding new features, or improving the code. You might start by fixing small issues or making improvements.

## Contributing your first code!

To contribute to open source, you first need a project to contribute to, so in this article we're gonna contributing in <a href="https://devprofiles.is-an.app" target="_blank">DevProfiles</a> website

<img src="/blog/images/devprofiles-preview.png">

### Now, What is DevProfiles?

DevProfiles is a website where developer list their profiles, showcase their skills, so it will be easier to connect with each other

Now we will add your profile on the website

#### Forking the repository

<img src="/blog/images/devprofiles-fork.jpeg">

Visit the GitHub repository of DevProfiles and fork it  
Link: <a target="_blank" href="https://github.com/oyepriyansh/DevProfiles">github.com/oyepriyansh/DevProfiles</a>

#### Making changes

Now go to 'data.json' file in your forked repository and add the following code

```json
  {
    "name": "YOUR_NAME",
    "image": "IMAGE_URL",
    "github": "YOUR GITHUB URL",
    "twitter": "YOUR X/TWITTER URL",
    "linkedin": "YOUR LINKEDIN URL",
    "skills": ["SKILL-1", "SKILL-2", "SKILL-3"]
  }
```

Change/Replace the placeholders with your name, skills, image and profiles url.

Now commit your changes!

<img src="/blog/images/devprofiles-commit.png">

#### Submit a Pull request

After commiting changes, you can create a pull request

<img src="/blog/images/devprofiles-open-pr.png">

<img src="/blog/images/devprofiles-submit-pr.png">

Add a good title to the pull request, like 'data: Profile addition by &lt;Your Name&gt;'

Now soon a maintainer will review and merge your pull request after that the changes you've made will be live on the website

Congratulations, you've contributed your first code to open source!