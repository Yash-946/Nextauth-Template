# NextAuth.js with OAuth, Email Verification using Resend

This guide demonstrates how to integrate OAuth login using **NextAuth.js**, **Resend** for sending email verification links, and saving user data in **PostgreSQL** in a **Next.js** project.



https://github.com/user-attachments/assets/22709602-1e64-4658-b342-432b57c556dc



## Prerequisites

- **Next.js** 
- **PostgreSQL** Database
- **NextAuth.js**
- **Resend** for sending email verification links
- **Prisma** ORM for PostgreSQL
- Basic understanding of OAuth providers like Google and Github

## Steps to setup the project
1. Clone the project and install the dependecies
    ```
    git clone https://github.com/Yash-946/Nextauth-Template.git
    ```
    ```
    npm i
    ```

2. Setup the Environment variables, copy .emv.example to .env
    ```
    DATABASE_URL=""
    NEXTAUTH_SECRET=""
    GOOGLE_CLIENT_SECRET=""
    GOOGLE_CLIENT_ID=""
    GITHUB_CLIENT_ID=""
    GITHUB_CLIENT_SECRET=""
    RESEND_API_KEY=""
    ```

3. Get the database connection url from [Neon](https://neon.tech/) and than these commands to migrate the database and generate the prisma client
   
   ```
   npx prisma migrate deploy
   npx prisma generate
   ```
4. You can change the ```NEXTAUTH_SECRET``` as per your need
5. For ```RESEND_API_KEY``` make sure you have a domain and it is verify by [Resend](https://resend.com/home) , only than you can send emails to other than you.
   ![image](https://github.com/user-attachments/assets/a43eb128-b665-4fa8-aef9-6508a7e5d751)
6. For setting up Google and Github secrets here is the demo 👇. [Doc](https://next-auth.js.org/providers/google)


https://github.com/user-attachments/assets/7fac11e4-553b-42a5-b4ac-d831218183c9

7. Final run  ```npm run dev```


