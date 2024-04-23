-- CreateTable
CREATE TABLE "blog" (
    "post_uuid" UUID NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "description" VARCHAR(300) NOT NULL,
    "date_of_last_modify" DATE NOT NULL,
    "cover_image" VARCHAR(100),
    "category" VARCHAR(50) NOT NULL,
    "tags" TEXT[],
    "link" VARCHAR(100) NOT NULL,

    CONSTRAINT "blog_pkey" PRIMARY KEY ("post_uuid")
);

-- CreateTable
CREATE TABLE "blogg" (
    "post_uuid" UUID NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "description" VARCHAR(100) NOT NULL,
    "date_of_last_modify" DATE NOT NULL,
    "cover_image" VARCHAR(100),
    "category" VARCHAR(50) NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "blogg_pkey" PRIMARY KEY ("post_uuid")
);

-- CreateTable
CREATE TABLE "User" (
    "users_uuid" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(30) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("users_uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

