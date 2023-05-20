import * as React from "react";
import { motion } from "framer-motion";
import { type } from "os";

type Props = {
    content: string
}

const SkillsContent = ({ content }: Props) => (
    <motion.div
        variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
        transition={{ duration: 0.8 }}
        className="content-placeholder px-4 pb-4"
    >
        <div dangerouslySetInnerHTML={{ __html: content }} />
    </motion.div>
);

export default SkillsContent;