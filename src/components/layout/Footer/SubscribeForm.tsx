import Button from "components/shared/Button";

const SubscribeForm = () => {
  return (
    <form>
      <div className="flex items-stretch">
        <input
          type="email"
          className="block w-full flex-1 rounded-tl-md rounded-bl-md border border-r-0 border-blue-900/30 px-4 outline-offset-[-1px] outline-primary placeholder:text-gray-500 focus:outline-2"
          placeholder="Your email"
        />
        <Button
          variant="contained"
          size="small"
          className="rounded-tl-none rounded-bl-none"
        >
          Subscribe
        </Button>
      </div>
    </form>
  );
};

export default SubscribeForm;
