import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import Checkbox from '@/components/UI/Checkbox';
import RadioButton from '@/components/UI/RadioButton';

const DashboardPage = () => {
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

      <h1 className="text-heading-1">Dashboard</h1>
    </div>
  );
};

export default DashboardPage;
