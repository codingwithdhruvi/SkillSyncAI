import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";

interface CompanionsListProps{
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionsList = ({ title, companions, classNames }: CompanionsListProps) => {
  return (
    <article className='companion-list'>
      <h2 className="text-3xl font-bold">Recent Sessions</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3">Lessons</TableHead>
            <TableHead className="text-lg">Subjects</TableHead>
            <TableHead className="text-lg">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map(({id, subject, name, topic, duration}) => (
            <TableRow key={id}>
              <TableCell>
                <Link href={`/companions/${id}`}>
                  <div className="flex items-center">
                    <div className="size-[75px] flex items-center justify-center">
                      <img src={`/icons/${subject}.svg`} alt={subject}
                      width={35} height={35}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-2xl font-bold">{name}</p>
                      <p className="text-lg">{topic}</p>
                    </div>
                  </div>
                </Link>
              </TableCell>
              <TableCell>
                <div className="flex justify-between items-center">
                  <div className="subject-badge w-fit ">
                    {subject}
                  </div>
                  <div className="max-md:hidden flex items-center justify-center w-fit">
                    <img src={`/icons/${subject}.svg`}
                    alt={subject}
                    width={18} height={18}
                    />
                  </div>
                </div>
              </TableCell>
              <TableCell className="">
                <div className="flex items-center justify-center w-full gap-2">
                  <p className="text-2xl">{duration} {''}
                    <span className="max-md:hidden">Mins</span>
                  </p>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  );
};

export default CompanionsList;
