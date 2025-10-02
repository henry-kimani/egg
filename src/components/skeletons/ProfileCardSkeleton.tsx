
export default function ProfileCardSkeleton() {
  return(
    <div class="flex px-3 gap-6 !mb-24">
      <div className="grid w-40 h-40 relative overflow-hidden">
        <div className="rounded-full skeleton animate-shimmer"></div>
      </div>

      <div>
        <div className="skeleton animate-shimmer h-8 w-40 rounded-md"></div> 
        <div>
          <div className=""></div>
          <div className="h-4 w-52 skeleton animate-shimmer rounded-full"></div> 
          <div className="h-10 w-36 skeleton animate-shimmer rounded-md"></div> 
        </div>
      </div> 
    </div>
  );
}
