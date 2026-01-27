import Image from "next/image";

const DetailsCard = ({ details, lang }) => {
  return (
    <>
      <div className="p-6 border rounded-xl col-span-12 lg:col-span-4  ">
        <h2 className="text-lg lg:text-2xl font-bold mb-2">{details.title}</h2>
        <div className="text-xs lg:text-sm text-black/60 mb-6">
          #{details.tags.join(", #")}
        </div>
        {/* <!-- info rows --> */}
        <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
          {/* <!-- item start --> */}
          <div className="flex justify-between">
            <span>Views</span>
            <span className="font-bold">{details.views}</span>
          </div>
          {/* <!-- item ends --> */}
          {/* <!-- item start --> */}
          <div className="flex justify-between">
            <span>Share</span>
            <span className="font-bold">{details.share}</span>
          </div>
          {/* <!-- item ends --> */}
          {/* <!-- item start --> */}
          <div className="flex justify-between">
            <span>Up loaded</span>
            <span className="font-bold">{details.uploaded}</span>
          </div>
          {/* <!-- item ends --> */}
        </div>
        {/* <!-- info rows ends --> */}

        {/* <!-- author info --> */}
        <div className="mt-6">
          {/* <!-- author header --> */}
          <div className="flex justify-between items-center mb-3">
            {/* <!--  --> */}
            <div className="flex items-center gap-3">
              <Image
                className="size-12 lg:size-14 rounded-full border"
                src={details.author.avatar}
                alt="avatar"
                height={56}
                width={56}
              />
              <div className="spacy-y-3">
                <h6 className="lg:text-lg font-bold">{details.author.name}</h6>
                <p className="text-black/60 text-xs lg:text-sm">
                  {details.author.followers} Followers
                </p>
              </div>
            </div>
            {/* <!-- action --> */}
            <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
              <Image
                src="/follow.svg"
                alt="follow.svg"
                height={20}
                width={20}
                className="w-5 h-5"
              />
              Follow
            </button>
          </div>
          {/* <!-- author bio --> */}
          <p className="text-xs lg:text-sm text-black/60">
            {details.author.bio}
          </p>
        </div>
        {/* <!-- author info ends --> */}
        {/* <!-- actions --> */}
        <div className="mt-6">
          <div className="flex items-stretch gap-3">
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                src="/heart.svg"
                alt="heart.svg"
                height={20}
                width={20}
                className="w-5 h-5"
              />
              100
            </button>
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                src="/save.svg"
                alt="save.svg"
                height={20}
                width={20}
                className="w-5 h-5"
              />
              Save
            </button>
            <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <Image
                src="/share.svg"
                alt="share.svg"
                height={20}
                width={20}
                className="w-5 h-5"
              />
              Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
