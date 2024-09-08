import TaskTable from '@/components/usable/TaskTable';
import { DefaultLayout } from '@/layouts';
import Link from 'next/link';

const TasksPage = () => {
    return (
        <DefaultLayout>
            <div className="p-4">
                <TaskTable />
            </div>
        </DefaultLayout>
    );
};

export default TasksPage;