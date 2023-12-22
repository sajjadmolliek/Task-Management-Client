const Faq = () => {
  return (
    <div className="bg-[#FE834C]">
    
      <div className="w-[20rem] md:w-[40rem] lg:w-[70rem] mx-auto py-6 space-y-4 rounded-none">
      <h1 className="text-[#ffffff] text-2xl md:text-4xl font-bold text-center font-serif">Frequently Asked Question
</h1>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What is an Online Study Group?
          </div>
          <div className="collapse-content">
            <p>As the name suggests, a one-line chart uses a single line to represent all three phases. ... study and assessment related to electrical safety engineering by ...</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How to Find the Perfect Study Buddies?
          </div>
          <div className="collapse-content">
            <p>Find your perfect online Study Buddy today! Get matched up with compatible online study partners based on your interests and preferences. Find a Study Buddy</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Can I join Existing Study Groups
          </div>
          <div className="collapse-content">
            <p>You can share kahoots with them that can be added to Study Groups. This can be either your own kahoots or existing games created by other users.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How to I Management Time and Study Skills
          </div>
          <div className="collapse-content">
            <p>By joining a study group, you will have the opportunity to observe a wide variety of study methods in action. After considering the pros and cons, you can ...</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Be Open-minded and Communicative-
          </div>
          <div className="collapse-content">
            <p>Improve/Develop New Study Skills: One way to enhance your studying methods/techniques is by joining a study group, which will provide you the opportunity to ...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
