import TagTable from './TagTable';

export default {
  component: TagTable,
  title: 'TagTable',
};

const sampleTags = [
  { count: 50, name: 'JavaScript' },
  { count: 30, name: 'React' },
  { count: 20, name: 'TypeScript' },
];

export const SortedByTag = () => <TagTable tags={sampleTags} />;
