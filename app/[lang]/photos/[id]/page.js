import PhotoDetails from "@/components/PhotoDetails";

const SinglePhoto = ({ params: { id, lang } }) => {
  return <PhotoDetails id={id} lang={lang} />;
};

export default SinglePhoto;
