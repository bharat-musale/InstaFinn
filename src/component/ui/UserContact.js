const UserContact = ({ phone, userType }) => (
    <div className="text-gray-800 text-sm font-medium">
      {phone} <span className="text-xs text-gray-400 font-normal">{userType}</span>
    </div>
  );
  export default UserContact;
  