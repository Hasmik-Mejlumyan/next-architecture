import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import Checkbox from '@/components/UI/Checkbox';
import RadioButton from '@/components/UI/RadioButton';
import Message from '@/components/UI/Message';

const DashboardPage = () => {
  const list = [
    {
      id: 1,
      message: 'hello ftftftftf ftgggtdshdvhs agdjabdjsbjdbz jsbfjabsjfbajb ksfknasnfkjanfjkn',
      owner: true,
    },
    {
      id: 2,
      message: 'hello',
      owner: false,
    },
    {
      id: 3,
      message: 'hello',
      owner: true,
    },
    {
      id: 4,
      message: 'hello ftftftftf ftgggtdshdvhs agdjabdjsbjdbz jsbfjabsjfbajb ksfknasnfkjanfjkn',
      owner: true,
    },
    {
      id: 5,
      message: 'hello',
      owner: false,
    },
    {
      id: 6,
      message: 'hello',
      owner: true,
    },
    {
      id: 7,
      message: 'hello',
      owner: false,
    },
    {
      id: 8,
      message: 'hello',
      owner: true,
    },
  ];

  return (
    <div>
      <Button btnColor="primary" variant="solid">
        Button
      </Button>

      <Input type="password" />

      <Checkbox
        // onChange={e => console.log(e.target.checked)}
        className="my-checkbox" // Example of passing className prop for styling
        wrapperClassName="checkbox-wrapper" // Example of passing wrapperClassName prop for styling
        error="" // Example of error prop usage
      />

      <RadioButton />

      <Message messageList={list} />

      <h1 className="text-heading-1">Dashboard</h1>
    </div>
  );
};

export default DashboardPage;
