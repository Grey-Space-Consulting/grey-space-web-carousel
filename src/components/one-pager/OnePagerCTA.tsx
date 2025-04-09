
const OnePagerCTA = () => {
  return (
    <div className="bg-primary/10 rounded-lg p-4 text-center mb-5">
      <h3 className="text-lg font-semibold mb-1.5">Ready to transform your operations?</h3>
      <p className="text-sm mb-1.5">Schedule a free consultation call with our experts.</p>
      <p className="font-medium text-base">
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
