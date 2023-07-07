import { sessionStore, useStore } from "../../session/store";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const regex = /^[uU]20\d{2}\/5570\d{3}$/;

const Form = () => {
  const navigate = useNavigate();
  const store = useStore(sessionStore, (state) => state);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ id: string }>();

  const onSubmit = async (data: { id: string }) => {
    console.log(data);
    store?.setId(data.id);
    navigate("/__experimental/app");
    reset();
  };
  return (
    <div className="bg-white rounded-2xl justify-center items-center inline-flex">
      <div className="self-stretch flex-col justify-center items-center gap-[60px] inline-flex">
        <div className="self-stretch h-24 flex-col justify-start items-center gap-5 flex">
          <div className="flex-col justify-start items-center flex">
            <div className="p-2.5 flex-col justify-start items-start gap-2.5 flex">
              <img
                className="w-[208.21px] h-8"
                src="/assets/CS Resourcify logo blue.png"
              />
            </div>
            <div className="w-full h-[0px] border border-neutral-600 border-opacity-10"></div>
          </div>
          <div className="text-center text-neutral-600 text-[18px] font-normal">
            Kindly enter your matriculation number to access resources
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full self-stretch h-[108px]">
            <input
              type="text"
              id="mat_no"
              placeholder="enter your mat-no"
              className={`input input-bordered w-full ${
                errors.id && "border-red-500"
              }`}
              {...register("id", { required: true, pattern: regex })}
            />
            {errors.id && (
              <label className="label">
                <span className="label-text-alt text-red-500 text-xs">
                  Resources are only available to CSC Students
                </span>
              </label>
            )}
            <div className="w-full h-11 p-2.5 bg-blue-950 rounded justify-center items-center gap-2.5 inline-flex mt-4">
              <button
                type={"submit"}
                className="grow shrink basis-0 h-6 text-center text-white text-[18px] font-medium"
              >
                Access resources
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
