import "./pills.scss";

function Pills({ status }: { status: string | undefined }): JSX.Element {
  return (
    <div
      className={
        status === "Inactive"
          ? "pill_inactive"
          : status === "Active"
          ? "pill_active"
          : "pill_blacklist"
      }
    >
      <p>{status}</p>
    </div>
  );
}

export default Pills;
