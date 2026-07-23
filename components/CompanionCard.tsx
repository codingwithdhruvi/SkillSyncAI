
import Link from "next/link";
interface CompanionCardProps{
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    color: string;
}

const CompanionCard = ({id, name, topic, subject, duration, color}:CompanionCardProps) => {
  return (
    <article className="companion-card" style={{backgroundColor: color}}>
        <div className="flex justify-between items-center">
            <div className="subject-badge">{subject}</div>
            <button className="companion-bookmark"><img src="/icons/bookmark.svg" alt="" /></button>
        </div>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-sm"> {topic}</p>
        <div className="flex gap-2">
            <img src="/icons/clock.svg" alt="" />
            <p className="texsm">{duration} mins duration</p>
        </div>
        <Link href={`/companions/${id}`}
        >
            <button className="btn-primary w-full justify-center">Launch Lesson</button>
        </Link>
    </article>
  )
}

export default CompanionCard