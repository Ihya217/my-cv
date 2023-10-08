import React from 'react';

const LoremIpsumBox = () => {
  const loremIpsumText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac justo id ipsum blandit tincidunt. Praesent interdum ligula nec velit hendrerit, eu scelerisque sem venenatis. Sed sit amet est non erat condimentum auctor. Nulla facilisi. Sed vel nunc vitae neque pharetra ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed a odio sit amet tortor hendrerit ullamcorper. Vivamus vitae magna vel velit euismod efficitur.";

  return (
    <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-md border border-white">
      <p className="text-lg">{loremIpsumText}</p>
    </div>
  );
}

export default LoremIpsumBox;
