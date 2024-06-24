
import type {Metadata} from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
 keywords:["about"],
 
};

export default function AboutPage() {
    return (
        <>
            <span className="text-2xl">About Page</span>
        </>
    )
}