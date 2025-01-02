# NextJS Envato Theme 

This project is a test of Bolt.new code copying Envato Theme. This attempt is only created to test Bolt and its detail on each iteration. 

![title](preview.png)

# Here's how i did it
Below are the 4 steps to generate the same template or others similarly. 

Please follow me on [X / Twitter](https://x.com/@alexgenovese) to keep posted on generative code and [RAG](https://alexgenovese.com)


## 1st Step: generate the full site
Print the screen of the page (I used a Google Chrome extension) and start typing the following prompt:

**Start with a simple but detailed request**
```
Write the code for this layout to generate a new nextjs project. Embed Google font typography and Tailwind CSS framework. Add the filtering system of the sidebar and copy all the pattern scheme colour and typography.
```
### The image I uploaded 
![full body](previews/full-layout.png)

## 2nd Step 
It missed the logic behind the filters and the header, but all the jobs have a look and feel modern, and it was a good starting point.

**Below the Prompt I used to add sidebar filters.**
```
Good job! Please add the filters as attached in this image. Could you write the code to add the layout code and the logic behind the filters? Once I click on the checkbox filter, it'll flag true, filter and show the results in the main section on the right showing the images.
```
### The image I uploaded 
![full body](previews/sidebar-filters.png)

## 3rd Step 
The sidebar is fixed and working fine, but the header and subheader are entirely wrong. It completely missed the menu generation too.

**Below the Prompt I used to add sidebar header and subheader.**
```
Fine. Update the code adding the header and subheader attached. Please provide details and use the same color patterns and font types. 
```
### The image I uploaded 
![full body](previews/header-subheader.png)


## 4th Step 
Now, the header and subheader are generated, but the menu was missing (generated wrong), and the search bar was not the same as in the attached screenshot.

**Below is the Prompt I used to add sidebar filtering and header.**
```
OK. You missed the menu and search bar. Copy the exact menu labels and keep design constraints as shown in the file attached. 
```
### The image I uploaded 
![full body](previews/header.png)


# Considerations
Each time I iterated, showing the small parts to add to the code generated was better and better. 

**I noticed that once you request to update it seems that it doesn't have much context** The generated code had issues and requires fixing each time I updated the code. 

But it'll be fixed soon. 


## Credits 

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/alexgenovese/envato-theme)

[Generated using Bolt.new](https://bolt.new)
