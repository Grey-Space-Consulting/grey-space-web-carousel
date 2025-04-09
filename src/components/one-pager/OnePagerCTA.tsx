
const OnePagerCTA = () => {
  return (
    <div className="bg-primary/10 rounded-lg p-4 text-center mb-6">
      <h3 className="text-lg font-semibold mb-2">Ready to transform your operations?</h3>
      <p className="mb-2">Schedule a free consultation call with our experts.</p>
      <p className="font-medium">
        <a 
          href="https://calendly.com/greyspace-hudson/grey-space-introductory-call" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Schedule a consultation call
        </a>
      </p>
    </div>
  );
};

export default OnePagerCTA;
