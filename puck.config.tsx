// puck.config.tsx
import type { Config } from "@measured/puck";
import { DropZone } from "@measured/puck";
import "@/app/globals.css"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
type ShadcnCardBlockProps = {
    title: string;
    description: string;
    content:string;
    variant?: string;
};
type ShadcnButtonProps = {
    content:string;
    variant?: string;
};


type Components = {
    ShadcnCardBlock: ShadcnCardBlockProps;
    HeadingBlock: { title: string };
    ShadcnButton: ShadcnButtonProps;
    Grid: object;
};


export const config: Config<Components, unknown> = {
    components: {
        ShadcnCardBlock: {
            fields: {
                title: {
                    type: "text",
                },
                description: {
                    type: "text",
                },
                content: {
                    type: "text",
                },
                variant: {
                    type: "select",
                    options: [
                        { value: "shadow-md", label: "Floating" },
                        { value: "border rounded-md", label: "Outlined" },
                    ],
                },
            },
            render: ({ title, description, content, variant }) => (
                <Card   className={variant}>
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>{content}</p>
                    </CardContent>
                </Card>
            ),
        },
        HeadingBlock: {
            fields: {
                title: { type: "text" },
            },
            defaultProps: {
                title: "Heading",
            },
            render: ({ title }) => (
                <div style={{ padding: 64 }}>
                    <h1>{title}</h1>
                </div>
            ),
        },
        ShadcnButton: {
            fields: {
                content: {
                    type: "text",
                },
                variant:{
                    type: "text",
                }
            },
            render: ({content,variant }) => (
                 <Button className={`${variant}`}>
                    {content}
                </Button>
            ),
        },
        Grid: {
            render: () => {
                // Render a Grid DropZone where users are able to drag and drop components
                return (
                    <DropZone
                        zone="my-grid"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                            gap: "16px",
                        }}
                    />
                );
            },
        },


    },
};
export default config;