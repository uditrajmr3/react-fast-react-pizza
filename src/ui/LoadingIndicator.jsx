function LoadingIndicator() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-300/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
}

export default LoadingIndicator;
