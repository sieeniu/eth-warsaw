import Link from 'next/link';

import TaskTable from '@/components/usable/TaskTable';
import { DefaultLayout } from '@/layouts';

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
