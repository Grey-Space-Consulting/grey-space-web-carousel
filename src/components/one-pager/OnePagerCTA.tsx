
const OnePagerCTA = () => {
  return (
    <div className="bg-primary/10 rounded-lg p-3 text-center mb-4">
      <h3 className="text-base font-semibold mb-1">Ready to transform your operations?</h3>
      <p className="text-xs mb-1">Schedule a free consultation call with our experts.</p>
      <p className="font-medium text-sm">
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
