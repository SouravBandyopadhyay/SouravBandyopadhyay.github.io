import * as React from "react";

interface EmailTemplateProps {
  name: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  message,
}) => (
  <div className="bg-gray-100 p-6 max-w-lg mx-auto rounded-lg shadow-lg">
    <h1 className="text-2xl font-semibold text-gray-800 mb-4">From, {name}!</h1>
    <p className="text-xl text-gray-700">{message}</p>
  </div>
);
