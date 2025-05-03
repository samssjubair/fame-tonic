const FlashSaleHeader = () => {
  return (
    <div 
      className="pt-[10px] pr-[20px] pb-[10px] pl-[20px] gap-[10px] flex items-center justify-center text-white md:[background:linear-gradient(90deg,_var(--color-primary)_0%,_#10CBE0_100%)]"
      style={{ 
        minHeight: '46px',
        background: 'linear-gradient(89.63deg, var(--color-primary) -2.16%, #10CBE0 115.27%)'
      }}
    >
      <p className="font-extrabold text-[16px] md:text-[22px] leading-[100%] tracking-[0%] align-middle text-center">
        🚀 <span style={{ color: '#00E7F9' }}>Fresh Beginnings Sale:</span> Extra 25% OFF, Limited Spots - start your journey today!
      </p>
    </div>
  );
}

export default FlashSaleHeader;