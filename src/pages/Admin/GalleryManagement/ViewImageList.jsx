import React from "react";
import toast from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
import Swal from "sweetalert2";
import { PageTitle } from "../../../components/Shared/PageTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useGallery from "../../../hooks/useGallery";
import { paginationFunction } from "../../../utils/paginationFunction";

export const ViewImageList = () => {
  const [gallery, loading, galleryRefetch] = useGallery();
  const axiosSecure = useAxiosSecure();

  const {
    currentPage,
    setCurrentPage,
    rowsPerPage,
    totalPages,
    renderTablePage,
  } = paginationFunction(gallery);

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/galleries/delete/${item._id}`);
        if (res.data?.response?.deletedCount > 0) {
          // refetch to update the ui
          galleryRefetch();
          toast.success("Selected Image has been deleted");
        }
      }
    });
  };

  return (
    <>
      <PageTitle title={"View All Images"} />
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-primary sm:text-3xl mb-3">
            View Images List
          </h1>
        </div>
        {loading && (
          <Skeleton
            style={{
              width: "100%",
              height: "5rem",
            }}
          />
        )}
        {!loading && (
          <>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>

                    <th>Description</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {renderTablePage(currentPage).map((singleImage) => (
                    <tr key={singleImage?._id}>
                      <td>
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={singleImage?.imageURL} />
                          </div>
                        </div>
                      </td>

                      <td>{singleImage?.description}</td>
                      <th className="text-center">
                        <button
                          onClick={() => handleDeleteItem(singleImage)}
                          className="bg-red-700 text-white px-4 py-2 rounded-none"
                        >
                          Delete
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex mx-auto justify-center items-center mt-4">
              <div className="join border border-accent">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="join-item btn"
                >
                  «
                </button>
                <button className="join-item btn">
                  Page {currentPage} of {totalPages}
                </button>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="join-item btn"
                >
                  »
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
