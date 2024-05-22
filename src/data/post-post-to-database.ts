import { db } from '../app/lib/db';
import { PostSchema } from '@/schemas';
import z from 'zod';
import { v4 as uuidv4 } from "uuid";

const postPostToDatabase = async (values: z.infer<typeof PostSchema>) => {
    try {
        const tagList = values.tags?.split(',')
        await db.blog.create({
            data: {
                post_uuid: uuidv4(), // Assuming you're using uuid for generating post_uuid
                title: values.title,
                description: values.description,
                date_of_last_modify: new Date(), // Assuming you want the current date and time
                cover_image: '',
                category: values.category,
                tags: tagList, // Assuming tags is an array field
                link: values.link,
            }
        })

        // update and create tagsList count
        if (tagList) {
            for (let tag of tagList) {
                await db.tagsList.upsert({
                    where: {
                        tagName: tag
                    },
                    update: {
                        count: {
                            increment: 1
                        }
                    },
                    create: {
                        tagName: tag,
                        count: 1
                    }
                })
            }
        }
        

        return { success: "Post posted successfully." }
    } catch {
        return {error: "Something went wrong with posting"}
    }
    
}

export default postPostToDatabase;