# **fpetranzan.me**

lang [EN]: [en](https://github.com/fpetranzan/fpetranzan.me/blob/master/README.md) | [it](https://github.com/fpetranzan/fpetranzan.me/blob/master/README_it.md)

**fpetranzan.me** is a personal project created with the goal of creating a simple portfolio, to emphasize content with minimal graphics and functionality. The site includes a description of me, an overview of my work experience, and the projects I have developed.  
This project provided a personal challenge by giving me the opportunity to develop new knowledge, as I ventured into technologies such as **Next.js** and **Tailwind CSS**, which do not belong to my usual backend developer stack.

## **Main Features**
- **Theme Change**: Support for light and dark theme.
- **Language Change**: Localization of content into multiple languages.

## **Technologies Used**
- **Languages e Framework**:
    - Next.js
    - Tailwind CSS
    - React
- **Library**:
    - `next`
    - `next-intl`
    - `next-themes`
    - `react`
    - `react-icons`
- **Tools**:
    - Docker

## **Installation**
The project can be easily executed through **Docker**.

### **Start using Docker**
1. Clone  the repository:
   ```bash
   git clone https://github.com/fpetranzan/fpetranzan.me.git
   cd fpetranzan.me
   ```
2. Create the Docker image:
   ```bash
   docker build --build-arg SETUP_ENVINROMENT=local -t portfolio .
   ```
   > You can specify the environment with `SETUP_ENVINROMENT` (for example, `local` or `production`). If not specified, the production environment will be used.
3. Start the container:
   ```bash
   docker run --rm -p 3000:3000 portfolio
   ```
4. Open the browser and visit:  
   [http://localhost:3000/](http://localhost:3000/)

## **Project Structure**
- **`messages/`**: Contains JSON files for localization of texts in various languages.
- **`src/`**: Source code, divided into:
    - **`pages/`**: The main pages of the site.
    - **`components/`**: Reusable components.
- **`public/`**: Static files such as images and resources.